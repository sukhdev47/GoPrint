package com.example.filedemo;

import org.springframework.web.client.RestTemplate;

import com.example.filedemo.model.Orders;

public class Testing {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String url ="http://localhost:8080";
		RestTemplate t =new RestTemplate();
		Orders z =new Orders(1, "..", 1, "z", "zzz", "zzz", "zz");
		  Integer q =  t.postForObject("http://localhost:8080/uploadOrders", z, Integer.class);
		  System.out.println(q);

	}

}
