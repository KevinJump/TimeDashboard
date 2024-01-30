using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

using Swashbuckle.AspNetCore.SwaggerGen;

namespace TimeDashboard.Client.Configuration;
internal class ConfigureSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
{
    public void Configure(SwaggerGenOptions options)
    {
        options.SwaggerDoc(
            "time",
            new OpenApiInfo
            {
                Title = "Time Management Api",
                Version = "Latest",
                Description = "Time from the server"
            });
    }
}
