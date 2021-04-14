package com.example.filedemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.filedemo.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>
{

}
