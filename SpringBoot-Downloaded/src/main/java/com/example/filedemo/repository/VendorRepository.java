package com.example.filedemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.filedemo.model.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, String>
{
	
}
