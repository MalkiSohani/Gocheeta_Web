package com.codewithmalki.gocheetabackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DKandy {
	@Id
    @GeneratedValue
    private Long id;
    private String start;
    private String end;
    private String one;
    private String km;
    public String getOne() {
		return one;
	}
    public DKandy() {
    }

	public void setOne(String one) {
		this.one = one;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getEnd() {
		return end;
	}
	public void setEnd(String end) {
		this.end = end;
	}
	public String getKm() {
		return km;
	}
	public void setKm(String km) {
		this.km = km;
	}
  
    
    

}
