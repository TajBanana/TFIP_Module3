package tajbanana.server.controllers;

import jakarta.json.Json;
import jakarta.json.JsonObjectBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.JsonObject;


@RestController
@RequestMapping(path = "/api/customer", produces = MediaType.APPLICATION_JSON_VALUE)
/*
SECOND METHOD OF FIXING CORS POLICY
@CrossOrigin("*")
*/
public class CustomerRestResource {

    @GetMapping()
    public ResponseEntity<String> getCustomer() {
        JsonObject user = Json.createObjectBuilder()
                .add("name","fred")
                .add("email","fred@gmail.com")
                .add("address","1 Serangoon")
                .build();

        System.out.println(">>> return");

/*      FIRST METHOD OF FIXING CORS POLICY
        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");
        return ResponseEntity.ok().headers(headers).body(user.toString());*/


/*THIRD METHOD OF FIXING CORS POLICY IS TO DO IT IN A CONFIGURATION FILE*/

        return ResponseEntity.ok(user.toString());

    }



}
