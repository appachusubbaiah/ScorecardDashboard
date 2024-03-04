package com.ocwen.ScorecardDashboard.exceptions;

public class SCException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public SCException(String err)
	{
		super(err);
	}
	
	public SCException(Exception ex)
	{
		super(ex);
	}

}
