package com.example.adp.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminDto { // Changed class name from UserDto to AdminDto
    private Long id;
    private String adminname;
    private String password;
}
