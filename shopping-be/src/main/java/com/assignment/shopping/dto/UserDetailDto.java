package com.assignment.shopping.dto;

public class UserDetailDto {
    private String username;

    private String firstname;

    private String lastname;

    private String address;

    public UserDetailDto(String username, String firstName, String lastName, String address) {
        this.username = username;
        this.firstname = firstName;
        this.lastname = lastName;
        this.address = address;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstName) {
        this.firstname = firstName;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
