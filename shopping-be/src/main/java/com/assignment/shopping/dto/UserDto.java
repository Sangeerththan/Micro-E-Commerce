package com.assignment.shopping.dto;

public class UserDto {
    private String username;

    private String password;

    private String confirmpassword;

    private String firstname;

    private String lastname;

    private String address;

    public UserDto(String username, String password, String confirmpassword, String firstname, String lastname, String address) {
        this.username = username;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
