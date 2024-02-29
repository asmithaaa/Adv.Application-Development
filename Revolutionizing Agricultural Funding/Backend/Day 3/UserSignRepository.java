package com.example.adp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.adp.Model.UserSign; // Changed import to UserSign

@Repository
public interface UserSignRepository extends JpaRepository<UserSign, Long> { // Changed interface name and type parameter
}
