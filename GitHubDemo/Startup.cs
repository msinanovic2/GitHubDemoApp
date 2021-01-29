using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GitHubDemo {
    public class Startup {
        public IHostingEnvironment HostingEnvironment { get; }

        public Startup( IHostingEnvironment env )
        {

            Configuration = new ConfigurationBuilder()
            .SetBasePath( env.ContentRootPath )
          .AddJsonFile( "appsettings.json", optional: true, reloadOnChange: true )
          .Build();

            HostingEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices( IServiceCollection services )
        {
            services.AddMvc().SetCompatibilityVersion( CompatibilityVersion.Version_2_2 );
            services.AddCors( options =>
            {
                options.AddPolicy( "AllowAll",
               builder =>
               {
                   builder
                   .AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
               } );
            } );

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, IHostingEnvironment env )
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseCors( "AllowAll" );
            
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
