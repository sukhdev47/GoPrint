package com.example.filedemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.filedemo.model.Orders;


@Transactional
@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> 
{
	@Modifying
	@Query(value = "SELECT * FROM Orders u WHERE  u.vendor_id = :vendor_id AND u.status='pending'",  nativeQuery = true)
	List<Orders> getPendingVendorOrders(@Param("vendor_id") String vendor_id);
	
	@Modifying
	@Query(value = "SELECT * FROM Orders u WHERE  u.vendor_id = :vendor_id",  nativeQuery = true)
	List<Orders> getVendorOrders(@Param("vendor_id") String vendor_id);
	
	
	@Modifying
	@Query(value = "SELECT * FROM Orders u WHERE  u.customer_id = :customer_id",  nativeQuery = true)
	List<Orders> getCustomerOrders(@Param("customer_id") String customer_id);
	
}
