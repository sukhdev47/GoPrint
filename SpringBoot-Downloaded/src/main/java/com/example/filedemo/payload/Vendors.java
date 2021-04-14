package com.example.filedemo.payload;

public class Vendors 
{
	private String VendorId;
	private String vendorName;
	private String addressLine;
	private String password;
	private Integer wallet;
	private String shopName;
	private Integer mobileNo;
	private Integer zone;
	private String area;
	private String city;
	private String state;
	private String country;
	
	public Vendors() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Vendors(String vendorId, String vendorName, String addressLine, String password, Integer wallet,
			String shopName, Integer mobileNo, Integer zone, String area, String city, String state, String country) {
		super();
		VendorId = vendorId;
		this.vendorName = vendorName;
		this.addressLine = addressLine;
		this.password = password;
		this.wallet = wallet;
		this.shopName = shopName;
		this.mobileNo = mobileNo;
		this.zone = zone;
		this.area = area;
		this.city = city;
		this.state = state;
		this.country = country;
	}
	public String getVendorId() {
		return VendorId;
	}
	public void setVendorId(String vendorId) {
		VendorId = vendorId;
	}
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	public String getAddressLine() {
		return addressLine;
	}
	public void setAddressLine(String addressLine) {
		this.addressLine = addressLine;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getWallet() {
		return wallet;
	}
	public void setWallet(Integer wallet) {
		this.wallet = wallet;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public Integer getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(Integer mobileNo) {
		this.mobileNo = mobileNo;
	}
	public Integer getZone() {
		return zone;
	}
	public void setZone(Integer zone) {
		this.zone = zone;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	
	
}
