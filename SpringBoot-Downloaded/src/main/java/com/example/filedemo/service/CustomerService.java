package com.example.filedemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.example.filedemo.model.Customer;
import com.example.filedemo.repository.CustomerRepository;

@Service
public class CustomerService 
{
	@Autowired
	CustomerRepository customerRepository; 
	
	public int UpdateCustomerRecord(Customer customer) 
	{	
		Optional<Customer> obj = customerRepository.findById(customer.getCustomerId());
		if(obj.isPresent())
		{
			customerRepository.save(customer);
			return 1;
		}
		return 0;
	}
	
	public Optional<Customer> getUserRecord(String customerId) 
	{
		return customerRepository.findById(customerId);
	}
}
