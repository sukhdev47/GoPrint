package com.example.filedemo.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="Vendor")
public class Vendor implements Serializable
{
	@Id
	private String VendorId;
	
	private String vendorName;
	private String addressLine;
	private String password;
	private Integer wallet;
	private String shopName;
	private Integer mobileNo;
	private Integer zone;
	
	public Vendor() 
	{
		super();
	}
	public Vendor(String vendorId, String vendorName, String addressLine, String password, Integer wallet,
			String shopName, Integer mobileNo, Integer zone)
	{
		super();
		this.VendorId = vendorId;
		this.vendorName = vendorName;
		this.addressLine = addressLine;
		this.password = password;
		this.wallet = wallet;
		this.shopName = shopName;
		this.mobileNo = mobileNo;
		this.zone = zone;
	}
	
	
	@Override
	public String toString() {
		return "Vendor [VendorId=" + VendorId + ", vendorName=" + vendorName + ", addressLine=" + addressLine
				+ ", password=" + password + ", wallet=" + wallet + ", shopName=" + shopName + ", mobileNo=" + mobileNo
				+ ", zone=" + zone + "]";
	}
	public String getVendorId() 
	{
		return VendorId;
	}
	public void setVendorId(String vendorId) 
	{
		VendorId = vendorId;
	}
	public String getVendorName() 
	{
		return vendorName;
	}
	public void setVendorName(String vendorName) 
	{
		this.vendorName = vendorName;
	}
	public String getAddressLine() 
	{
		return addressLine;
	}
	public void setAddressLine(String addressLine) 
	{
		this.addressLine = addressLine;
	}
	public String getPassword() 
	{
		return password;
	}
	public void setPassword(String password) 
	{
		this.password = password;
	}
	public Integer getWallet() 
	{
		return wallet;
	}
	public void setWallet(Integer wallet)
	{
		this.wallet = wallet;
	}
	public String getShopName() 
	{
		return shopName;
	}
	public void setShopName(String shopName) 
	{
		this.shopName = shopName;
	}
	public Integer getMobileNo() 
	{
		return mobileNo;
	}
	public void setMobileNo(Integer mobileNo) 
	{
		this.mobileNo = mobileNo;
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
