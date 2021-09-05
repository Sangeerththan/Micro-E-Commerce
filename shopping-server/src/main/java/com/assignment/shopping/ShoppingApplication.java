package com.assignment.shopping;

import com.assignment.shopping.component.Test;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ShoppingApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingApplication.class, args);
	}



	@Override
	public void run(String... args) throws Exception {
		Test test = new Test();
		test.process();
	}
}
