package de.elhabiby.spring_boot_store.DAO;

import de.elhabiby.spring_boot_store.Entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface BookRepo extends JpaRepository<Book, Long> {

    Page<Book> findByTitleContaining (@RequestParam("title") String title, Pageable pageable);

    Page<Book> findByCategory (@RequestParam("category") String category, Pageable pageable);
}
