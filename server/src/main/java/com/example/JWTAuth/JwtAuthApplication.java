package com.example.JWTAuth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class JwtAuthApplication {

	@GetMapping("/")
	public String home() {
		return "Welcome to JWT Auth";
	}
	public static void main(String[] args) {
		SpringApplication.run(JwtAuthApplication.class, args);
	}

}
