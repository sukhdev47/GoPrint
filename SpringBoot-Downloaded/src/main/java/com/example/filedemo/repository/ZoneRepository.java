package com.example.filedemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.filedemo.model.Zone;

@Repository
public interface ZoneRepository extends JpaRepository<Zone, Integer> {

}
