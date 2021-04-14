package com.example.filedemo.controller;

import com.example.filedemo.model.Customer;
import com.example.filedemo.model.DBFile;
import com.example.filedemo.model.Orders;
import com.example.filedemo.model.Vendor;
import com.example.filedemo.payload.OrderObj;
import com.example.filedemo.payload.UploadFileResponse;
import com.example.filedemo.payload.Vendors;
import com.example.filedemo.service.CustomerService;
import com.example.filedemo.service.DBFileStorageService;
import com.example.filedemo.service.OrderService;
import com.example.filedemo.service.VendorService;
import com.example.filedemo.service.ZoneService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class FileController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @Autowired
    private DBFileStorageService dbFileStorageService;
    
    @Autowired
    private ZoneService zoneService = new ZoneService();
    
    @Autowired
    private CustomerService customerService = new CustomerService();
    
    @Autowired
    private VendorService vendorService = new VendorService();
    
    @Autowired
    private OrderService orderService = new OrderService();

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file) {
        DBFile dbFile = dbFileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(dbFile.getId())
                .toUriString();

        return new UploadFileResponse(dbFile.getFileName(), fileDownloadUri,
                file.getContentType(), file.getSize());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(file))
                .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/downloadFile/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) {
        // Load file from database
        DBFile dbFile = dbFileStorageService.getFile(fileId);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(dbFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getFileName() + "\"")
                .body(new ByteArrayResource(dbFile.getData()));
    }
    
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/vendorList")
    public List<Vendors> getVendors(@RequestParam("pincode") int pincode)
    {
    	return vendorService.getVendors(pincode);
    }
    
    
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/uploadOrders")
    public int uploadOrders(@RequestBody Orders val)
    {
    	
    	return orderService.uploadOrders(val);
    
    }
    
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/updateOrders")
    public int updateOrders(@RequestBody Orders val)
    {
    	return orderService.updateOrders(val);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pendingvendorOrders")
    public List<Orders> getPendingVendorOrders(@RequestParam("vendorId") String vendorId)
    {
    	//System.out.println("////////////////////"+vendorId);
    
    	return orderService.getPendingOrders(vendorId);
    }
    
    
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/vendorOrders")
    public List<Orders> getVendorOrders(@RequestParam("vendorId") String vendorId)
    {
    	
    	return orderService.getVendorOrders(vendorId);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/customerOrders")
    public List<Orders> getCustomerOrders(@RequestParam("customerId") String customerId)
    {
    	
    	return orderService.getCustomerOrders(customerId);
    }
    
    

	@CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/updateUser")
	public int UpdateCustomer(@RequestBody Customer customer)  //updating customer record
	{
		return customerService.UpdateCustomerRecord(customer);			
	}
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/updateVendor")
   	public int UpdateVendor(@RequestBody Vendor vendor)  //updating customer record
   	{
    	return vendorService.UpdateVendorRecord(vendor);		
   	}
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getuserrecord")
	public Optional<Customer> GetUserRecord(@RequestParam("primarykey") String customerId)  //search customer record
	{
		Optional<Customer> cust =customerService.getUserRecord(customerId);
		return cust;		
	}
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getvendorrecord")
   	public Optional<Vendor> GetVendorRecord(@RequestParam("primarykey") String vendorId)  //search vendor record
   	{
   		Optional<Vendor> vend =vendorService.getVendorRecord(vendorId);
   		return vend;		
   	}
    
    
    
}
