package com.example.filedemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.filedemo.model.Orders;
import com.example.filedemo.repository.OrderRepository;

@Service
public class OrderService 
{
	@Autowired
	private OrderRepository orderRepository;
	
	public int uploadOrders(Orders orderObj)
	{
		
			if(orderRepository.save(orderObj) != null)
			{
				return 1;
			}
			return 0;
		
	}
	
	public int updateOrders(Orders orderObj)
	{
		if(orderRepository.existsById(orderObj.getOrderId()))
		{
			if(orderRepository.save(orderObj) != null)
			{
				return 1;
			}
			return 0;
		}
		return 0;
	}
	
	public List<Orders> getVendorOrders(String vendorId)
	{
		
		return orderRepository.getVendorOrders(vendorId);
	}
	
	public List<Orders> getPendingOrders(String vendorId)
	{
		return orderRepository.getPendingVendorOrders(vendorId);
	}
	
	public List<Orders> getCustomerOrders(String customerId)
	{
		
		return orderRepository.getCustomerOrders(customerId);
	}
	
}
