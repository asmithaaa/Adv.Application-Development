package com.example.adp.Services;

import java.util.List;

import com.example.adp.Dto.*;

public interface UserSignService {
    UserSignDto createUserSign(UserSignDto userSignDto);

    UserSignDto getUserSignById(Long userSignId);

    List<UserSignDto> getAllUsers();

    UserSignDto updateUserSign(Long userSignId, UserSignDto userSignDto); // Changed return type to UserSignDto

    void deleteUser(Long userSignId);
}
