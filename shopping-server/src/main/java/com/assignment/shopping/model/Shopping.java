package com.assignment.shopping.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table
public class Shopping implements Serializable {

    @Column
    private String username;

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String status;

    @Column
    private Integer totalAmount;

    @Column
    private Date date;

    public Shopping(String username, String status, Integer totalAmount, Date date) {
        this.username = username;
        this.status = status;
        this.totalAmount = totalAmount;
        this.date = date;
    }

    public Shopping() {
    }

    public String getStatus() {
        return status;
    }

    public Integer getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Shopping{" +
                "username='" + username + '\'' +
                ", id=" + id +
                ", status='" + status + '\'' +
                ", totalAmount=" + totalAmount +
                ", date=" + date +
                '}';
    }
}
