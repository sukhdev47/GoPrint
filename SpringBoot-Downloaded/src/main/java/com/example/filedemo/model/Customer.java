package com.example.filedemo.model;

import javax.persistence.*;

@Entity
@Table(name="Customer")
public class Customer 
{
	
	@Id
	private String customerId;	
	
	private String firstName;
	private String lastName;
	private Integer mobileNo;
	private String password;
	private String addressLine1;
	private Integer wallet;
	private Integer zone;
	
	
	public Customer() 
	{
		super();
	}
	
	public Customer(String customerId, String firstName, String lastName, Integer mobileNo, String password,
			String addressLine1, Integer wallet, Integer zone) 
	{
		super();
		this.customerId = customerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.password = password;
		this.addressLine1 = addressLine1;
		this.wallet = wallet;
		this.zone = zone;
	}
	
	@Override
	public String toString() 
	{
		return "Customer [customerId=" + customerId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", mobileNo=" + mobileNo + ", password=" + password + ", addressLine1=" + addressLine1 + ", wallet="
				+ wallet + ", zone=" + zone + "]";
	}
	
	
	public String getCustomerId() 
	{
		return customerId;
	}
	public void setCustomerId(String customerId) 
	{
		this.customerId = customerId;
	}
	public String getFirstName() 
	{
		return firstName;
	}
	public void setFirstName(String firstName) 
	{
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) 
	{
		this.lastName = lastName;
	}
	public Integer getMobileNo() 
	{
		return mobileNo;
	}
	public void setMobileNo(Integer mobileNo) 
	{
		this.mobileNo = mobileNo;
	}
	public String getPassword() 
	{
		return password;
	}
	public void setPassword(String password) 
	{
		this.password = password;
	}
	public String getAddressLine1() 
	{
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) 
	{
		this.addressLine1 = addressLine1;
	}
	public Integer getWallet() 
	{
		return wallet;
	}
	public void setWallet(Integer wallet) 
	{
		this.wallet = wallet;
	}
	public Integer getZone() 
	{
		return zone;
	}
	public void setZone(Integer zone) 
	{
		this.zone = zone;
	}
	
}
