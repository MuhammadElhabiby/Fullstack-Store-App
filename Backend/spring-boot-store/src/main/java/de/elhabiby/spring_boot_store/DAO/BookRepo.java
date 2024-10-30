package de.elhabiby.spring_boot_store.DAO;

import de.elhabiby.spring_boot_store.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Book, Long> {
}
