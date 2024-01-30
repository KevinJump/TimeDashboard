using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

using Swashbuckle.AspNetCore.SwaggerGen;

using Umbraco.Cms.Api.Management.OpenApi;
using Umbraco.Cms.Api.Common.Serialization;
using Umbraco.Cms.Api.Common.Security;
using TimeDashboard.Client.OpenApi;

namespace TimeDashboard.Client.Configuration;
internal class ConfigureSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
{

    private IUmbracoJsonTypeInfoResolver _umbracoJsonTypeInfoResolver;

    public ConfigureSwaggerGenOptions(IUmbracoJsonTypeInfoResolver umbracoJsonTypeInfoResolver)
    {
        _umbracoJsonTypeInfoResolver = umbracoJsonTypeInfoResolver;
    }

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

        options.OperationFilter<TimeResponseHeaderOperationFilter>();
        options.SelectSubTypesUsing(_umbracoJsonTypeInfoResolver.FindSubTypes);
        options.UseOneOfForPolymorphism();
        options.UseAllOfForInheritance();

        options.AddSecurityDefinition(
            "time",
            new OpenApiSecurityScheme
            {
                In = ParameterLocation.Header,
                Name = "Umbraco",
                Type = SecuritySchemeType.OAuth2,
                Description = "Umbraco Authentication",
                Flows = new OpenApiOAuthFlows
                {
                    AuthorizationCode = new OpenApiOAuthFlow
                    {
                        AuthorizationUrl =
                             new Uri(Paths.BackOfficeApi.AuthorizationEndpoint, UriKind.Relative),
                        TokenUrl = new Uri(Paths.BackOfficeApi.TokenEndpoint, UriKind.Relative)
                    }
                }
            });

        // Sets Security requirement on backoffice apis
        options.OperationFilter<TimeBackOfficeSecurityRequirementsOperationFilter>();
        options.SchemaFilter<RequireNonNullablePropertiesSchemaFilter>();
    }
}
