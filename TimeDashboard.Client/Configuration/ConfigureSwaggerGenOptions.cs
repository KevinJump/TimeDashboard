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

        // sets the operation Ids to be the same as the action
        // so it loses all the v1... bits to the names.
        options.CustomOperationIds(e => $"{e.ActionDescriptor.RouteValues["action"]}");

    }
}
