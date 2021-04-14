package com.example.filedemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.filedemo.repository.ZoneRepository;

@Service
public class ZoneService 
{
	 @Autowired
	 private ZoneRepository zoneRepository;
}
