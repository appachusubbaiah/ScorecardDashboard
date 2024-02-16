package com.ocwen.ScorecardDashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class ScorecardDashboardApplication
  extends SpringBootServletInitializer
{
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) { return application.sources(new Class[] { ScorecardDashboardApplication.class }); }

  
  public static void main(String[] args) { SpringApplication.run(ScorecardDashboardApplication.class, args); }
}
