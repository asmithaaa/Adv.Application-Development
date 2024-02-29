package com.example.adp.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.adp.Dto.UserSignDto;
import com.example.adp.Services.UserSignService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/usersign")
public class UserSignController {

    private UserSignService userSignService; // Changed variable name from userSignService to userService

    // Add User REST API
    @PostMapping
    public ResponseEntity<UserSignDto> createUser(@RequestBody UserSignDto userSignDto) {
        UserSignDto savedUserSign = userSignService.createUserSign(userSignDto); // Changed to use userService
        return new ResponseEntity<>(savedUserSign, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<UserSignDto> getUserSignById(@PathVariable("id") Long userSignId) {
        UserSignDto userSignDto = userSignService.getUserSignById(userSignId); // Changed to use userService
        return ResponseEntity.ok(userSignDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<UserSignDto>> getAllUsers() {
        List<UserSignDto> usersign = userSignService.getAllUsers(); // Changed to use userService
        return ResponseEntity.ok(usersign);
    }

    // Update User REST API
    @PutMapping("{id}")
    public ResponseEntity<UserSignDto> updateUser(@PathVariable("id") Long userSignId, @RequestBody UserSignDto userSignDto) {
        UserSignDto updatedUserSign = userSignService.updateUserSign(userSignId, userSignDto); // Changed to use userService
        return ResponseEntity.ok(updatedUserSign);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteUserSign(@PathVariable("id") Long userSignId) {
        userSignService.deleteUser(userSignId);
        return ResponseEntity.noContent().build();
    }
}
