﻿using Microsoft.EntityFrameworkCore;
using FullStack.API.Models;

namespace FullStack.API.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }  
    }
}
