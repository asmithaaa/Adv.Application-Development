package com.example.adp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.adp.Model.Admin; // Changed import to Admin

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> { // Changed interface name from UserRepository to AdminRepository and the type parameter from User to Admin
}
