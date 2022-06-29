package com.spring.angular.register.model;


public enum GenderEnum {
	MALE(1,"Male"),
	FEMALE(2,"Female"),
	OTHER(3,"Other");
	
	private int gender;
	private String genderString;
	
	GenderEnum(int gender, String genderString) {
		this.gender = gender;
		this.genderString = genderString;
	}


}
