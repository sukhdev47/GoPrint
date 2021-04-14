package com.example.filedemo.model;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
@Table(name="Zone")
public class Zone implements Serializable
{
	@Id
	private Integer zip;
	
	private String area;
	private String city;
	private String state;
	private String country;
	public Zone() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Zone(Integer zip, String area, String city, String state, String country) {
		super();
		this.zip = zip;
		this.area = area;
		this.city = city;
		this.state = state;
		this.country = country;
	}
	public Integer getZip() {
		return zip;
	}
	public void setZip(Integer zip) {
		this.zip = zip;
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
