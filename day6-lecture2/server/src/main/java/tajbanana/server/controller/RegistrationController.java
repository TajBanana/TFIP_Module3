package tajbanana.server.controller;

import jakarta.json.Json;
import jakarta.json.JsonObjectBuilder;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/register", produces = MediaType.APPLICATION_JSON_VALUE)
public class RegistrationController {
    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<String> postMethodName(@RequestBody MultiValueMap<String, String> form) {
        String name = form.getFirst("name");
        String email = form.getFirst("email");
        String phone = form.getFirst("phone");

        System.out.printf("name: %s\nemail: %s\nphone: %s\n",name,email,phone);

        JsonObjectBuilder payload = Json.createObjectBuilder();
        payload.add("message", "%s, you have been registered".formatted(name));

        return ResponseEntity.status(HttpStatus.ACCEPTED).contentType(MediaType.APPLICATION_JSON).body(payload.build().toString());

    }
}
