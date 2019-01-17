package com.example.demo.hello;


import org.springframework.web.bind.annotation.*;

@RestController
public class HelloWorldController {

  @GetMapping("hello-world")
  public String helloWorld() {
    return "Hello World!";
  }

  @GetMapping("hello-world-bean")
  public HelloWorldBean helloWorldBean() {
    return new HelloWorldBean("Hello World!");
  }

  @GetMapping("hello-world/path-variable/{name}")
  public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
    return new HelloWorldBean(String.format("Hello World! %s", name));
  }
}
