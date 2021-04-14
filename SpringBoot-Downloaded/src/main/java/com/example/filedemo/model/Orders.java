package com.example.filedemo.model;

import java.util.Date;
import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name="Orders")
public class Orders 
{
	@Id
	private Integer orderId;
	
	private String ordeDate;
	private Integer amount;
	private String status;
	
	private String vendorId;
	private String fileId;
	private String customerId;
	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orders(Integer orderId, String ordeDate, Integer amount, String status, String vendorId, String fileId,
			String customerId) {
		super();
		this.orderId = orderId;
		this.ordeDate = ordeDate;
		this.amount = amount;
		this.status = status;
		this.vendorId = vendorId;
		this.fileId = fileId;
		this.customerId = customerId;
	}
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public String getOrdeDate() {
		return ordeDate;
	}
	public void setOrdeDate(String ordeDate) {
		this.ordeDate = ordeDate;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getVendorId() {
		return vendorId;
	}
	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	
	

	
}
