package com.ecommerce.cart.service;

import com.ecommerce.cart.model.Cart;
import com.ecommerce.cart.model.CartItem;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class CartService {

    private final RedisTemplate<String, Object> redisTemplate;
    private static final String CART_KEY = "Cart_";

    public Cart getCart(String userId) {
        Cart cart = (Cart) redisTemplate.opsForValue().get(CART_KEY + userId);
        if (cart == null) {
            cart = new Cart();
            cart.setUserId(userId);
        }
        return cart;
    }

    public Cart addToCart(String userId, CartItem item) {
        Cart cart = getCart(userId);
        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(i -> i.getProductId().equals(item.getProductId()))
                .findFirst();

        if (existingItem.isPresent()) {
            existingItem.get().setQuantity(existingItem.get().getQuantity() + item.getQuantity());
        } else {
            cart.getItems().add(item);
        }
        calculateTotal(cart);
        redisTemplate.opsForValue().set(CART_KEY + userId, cart, 30, TimeUnit.DAYS);
        return cart;
    }

    public Cart removeFromCart(String userId, String productId) {
        Cart cart = getCart(userId);
        cart.getItems().removeIf(item -> item.getProductId().equals(productId));
        calculateTotal(cart);
        redisTemplate.opsForValue().set(CART_KEY + userId, cart, 30, TimeUnit.DAYS);
        return cart;
    }

    public void clearCart(String userId) {
        redisTemplate.delete(CART_KEY + userId);
    }

    private void calculateTotal(Cart cart) {
        BigDecimal total = cart.getItems().stream()
                .map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        cart.setTotalPrice(total);
    }
}
