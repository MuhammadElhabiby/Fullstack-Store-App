package de.elhabiby.spring_boot_store.Config;

import com.okta.spring.boot.oauth.Okta;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.accept.ContentNegotiationStrategy;
import org.springframework.web.accept.HeaderContentNegotiationStrategy;
import jakarta.servlet.http.HttpServletRequest;


@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // Disable CSRF (if not required)
        http.csrf(csrf -> csrf.disable())

                // Protect endpoints under /api/<type>/secure
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/books/secure/**",
                                "/api/reviews/secure/**",
                                "/api/messages/secure/**",
                                "/api/admin/secure/**")
                        .authenticated()
                )

                // Configure OAuth2 JWT authentication
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(jwt -> {}) // This ensures JWT authentication is enabled
                )

                // Enable CORS
                .cors(cors -> {})

                // Set content negotiation strategy
                .setSharedObject(ContentNegotiationStrategy.class, new HeaderContentNegotiationStrategy());

        // Force a non-empty response body for 401 errors (Okta configuration)
        Okta.configureResourceServer401ResponseBody(http);

        return http.build();
    }
}
