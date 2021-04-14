package com.example.filedemo.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.filedemo.model.Orders;
import com.example.filedemo.model.Vendor;
import com.example.filedemo.model.Zone;
import com.example.filedemo.payload.Vendors;
import com.example.filedemo.repository.VendorRepository;
import com.example.filedemo.repository.ZoneRepository;

@Service
public class VendorService 
{
	@Autowired
	private VendorRepository vendorRepository;
	@Autowired
	private ZoneRepository zoneRepository;
	
	
	
	
	public List<Vendors> getVendors(int pincode)
	{
		List<Vendor> vList= vendorRepository.findAll();
		Optional<Zone> pin=zoneRepository.findById(pincode);
		Zone pinFinal = null;
		if(pin.isPresent())
		{
			pinFinal=pin.get();
		}
		else
		{
			return null;
		}
		
		//public Vendors(String vendorId, String vendorName, String addressLine, String password, Integer wallet,
		//String shopName, Integer mobileNo, Integer zone, String area, String city, String state, String country)
		List<Vendors> vendorsList= new ArrayList<Vendors>();
		Iterator<Vendor> it = vList.iterator();
		while(it.hasNext())
		{
			Vendor v= it.next();
			if(v.getZone() == pincode)
			{
				Vendors vAdd= new Vendors(v.getVendorId(),v.getVendorName(),v.getAddressLine(),v.getPassword(),v.getWallet(),v.getShopName(),
						v.getMobileNo(),v.getZone(),pinFinal.getArea(),pinFinal.getCity(),pinFinal.getState(),pinFinal.getCountry());
				vendorsList.add(vAdd);
			}
			
		}
		
		
		
		return vendorsList;
	}
	
	
	
	public int UpdateVendorRecord(Vendor vendor) 
	{	
		Optional<Vendor> obj = vendorRepository.findById(vendor.getVendorId());
		if(obj.isPresent())
		{
			vendorRepository.save(vendor);
			return 1;
		}
		return 0;
	}
	
	public Optional<Vendor> getVendorRecord(String vendorId) 
	{
		return vendorRepository.findById(vendorId);
	}
	
	
}
