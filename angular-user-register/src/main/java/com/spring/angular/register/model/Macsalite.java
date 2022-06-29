package com.spring.angular.register.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.util.StringUtils;

@Entity
@Table(name = "macsalite_crud")
public class Macsalite {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "email_address")
	private String emailAddress;
	@Column(name = "birth_day")
	private Date birthDay;
	@Column(name = "gender")
	private int gender;
	@Column(name = "ph_num")
	private long phNum;
	@Column(name = "user_name")
	private String userName;
	@Column(name = "password")
	private String password;

	private String birthDayString;
	private String genderString;
	private String confirmPassword;
	
	public Macsalite() {
		
	}

	public Macsalite(String firstName, String lastName, String emailAddress,
			String userName, String password, Date birthDay, int gender, long phNum, String birthDayString,
			String genderString, String confirmPassword) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailAddress = emailAddress;
		this.userName = userName;
		this.password = password;
		this.birthDay = birthDay;
		this.gender = gender;
		this.phNum = phNum;
		this.birthDayString = birthDay.toString();
		this.confirmPassword = password;
		this.genderString = getGenderString(gender);
	
	}


	public long getId() {
		return id; 
		}
	public void setId(long id) {
		this.id = id; 
		}

			public String getFirstName() {
				return firstName; 
				}
			
			public void setFirstName(String firstName) {
					this.firstName = firstName;
					}

				public String getLastName() {
					return lastName; 
					}
				public void setLastName(String lastName) {
						this.lastName = lastName; 
						}

					public String getEmailAddress() {
						return emailAddress; 
						}
					public void setEmailAddress(String emailAddress) {
						this.emailAddress = emailAddress; 
						}

//					public String setBirthDayString(Date birthDay) {
//						return birthDay.toString();
//					}
					
					public String getGenderString(String gender) {
						
						if(StringUtils.isEmpty(gender)) {
							return getGenderString(Integer.parseInt(gender));
						}
						return "";
					}

					public String getGenderString(int gender) {
						switch(gender) {
						case 1:
							return GenderEnum.MALE.name();
						case 2:
							return GenderEnum.FEMALE.name();
						case 3:
							return GenderEnum.OTHER.name();
						default:
							return GenderEnum.MALE.name();
						}
					}

					public String getBirthDayString(Date birthDay) {
						return birthDay.toString();
					}
					@Override
					public String toString() {
						return "Macsalite [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailAddress=" + emailAddress
								+ ", birthDay" + birthDay + ", gender" + gender + ", phNum" + phNum + ", userName" + userName + ", password" + password + ", birthDayString" + birthDayString + ", genderString" + genderString + "]";
					}


					/**
					 * @return the birthDay
					 */
					public Date getBirthDay() {
						return birthDay;
					}


					/**
					 * @param birthDay the birthDay to set
					 */
					public void setBirthDay(Date birthDay) {
						this.birthDay = birthDay;
					}


					/**
					 * @return the gender
					 */
					public int getGender() {
						return gender;
					}


					/**
					 * @param gender the gender to set
					 */
					public void setGender(int gender) {
						this.gender = gender;
					}


					/**
					 * @return the phNum
					 */
					public long getPhNum() {
						return phNum;
					}


					/**
					 * @param phNum the phNum to set
					 */
					public void setPhNum(long phNum) {
						this.phNum = phNum;
					}


					/**
					 * @return the userName
					 */
					public String getUserName() {
						return userName;
					}


					/**
					 * @param userName the userName to set
					 */
					public void setUserName(String userName) {
						this.userName = userName;
					}


					/**
					 * @return the password
					 */
					public String getPassword() {
						return password;
					}


					/**
					 * @param password the password to set
					 */
					public void setPassword(String password) {
						this.password = password;
					}


					/**
					 * @return the birthDayString
					 */
					public String getBirthDayString() {
						return this.birthDay.toString();
					}


//					/**
//					 * @param birthDayString the birthDayString to set
//					 */
//					public void setBirthDayString(String birthDayString) {
//						this.birthDayString = this.birthDay.toString();
//					}


					/**
					 * @return the genderString
					 */
					public String getGenderString() {
						return getGenderString(this.gender);
					}


//					/**
//					 * @param genderString the genderString to set
//					 */
//					public void setGenderString(String genderString) {
//						this.genderString = genderString;
//					}


					/**
					 * @return the confirmPassword
					 */
					public String getConfirmPassword() {
						return this.password;
					}


//					/**
//					 * @param confirmPassword the confirmPassword to set
//					 */
//					public void setConfirmPassword(String confirmPassword) {
//						this.confirmPassword = this.password;
//					}

}
