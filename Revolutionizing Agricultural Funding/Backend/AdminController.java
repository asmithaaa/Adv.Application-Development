package com.example.adp.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.adp.Dto.AdminDto; 
import com.example.adp.Services.AdminService; 

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/admins") // Changed request mapping from "/api/users" to "/api/admins"
public class AdminController {

    private AdminService adminService; // Changed service type from UserService to AdminService

    // Add Admin REST API
    @PostMapping
    public ResponseEntity<AdminDto> createAdmin(@RequestBody AdminDto adminDto) { // Changed method name from createUser to createAdmin and the parameter type from UserDto to AdminDto
        AdminDto savedAdmin = adminService.createAdmin(adminDto); // Changed service method from createUser to createAdmin
        return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }

    // Get Admin REST API
    @GetMapping("{id}")
    public ResponseEntity<AdminDto> getAdminById(@PathVariable("id") Long adminId) { // Changed method name from getUserById to getAdminById and the parameter type from Long userId to Long adminId
        AdminDto adminDto = adminService.getAdminById(adminId); // Changed service method from getUserById to getAdminById
        return ResponseEntity.ok(adminDto);
    }

    // Get All Admins REST API
    @GetMapping
    public ResponseEntity<List<AdminDto>> getAllAdmins() { // Changed method name from getAllUsers to getAllAdmins and the return type from List<UserDto> to List<AdminDto>
        List<AdminDto> admins = adminService.getAllAdmins(); // Changed service method from getAllUsers to getAllAdmins
        return ResponseEntity.ok(admins);
    }

    // Update Admin REST API
    @PutMapping("{id}")
    public ResponseEntity<AdminDto> updateAdmin(@PathVariable("id") Long adminId, @RequestBody AdminDto adminDto) { // Changed method name from updateUser to updateAdmin and the parameter type from Long userId to Long adminId, and the parameter type from UserDto to AdminDto
        AdminDto updatedAdmin = adminService.updateAdmin(adminId, adminDto); // Changed service method from updateUser to updateAdmin
        return ResponseEntity.ok(updatedAdmin);
    }

    // Delete Admin REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable("id") Long adminId) { // Changed method name from deleteUser to deleteAdmin and the parameter type from Long userId to Long adminId
        adminService.deleteAdmin(adminId); // Changed service method from deleteUser to deleteAdmin
        return ResponseEntity.noContent().build();
    }
}
