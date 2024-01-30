using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace TimeDashboard.Client.OpenApi;
internal class TimeResponseHeaderOperationFilter : IOperationFilter
{
    public void Apply(OpenApiOperation operation, OperationFilterContext context)
    {
        if (context.MethodInfo.HasMapToApiAttribute("time") == false)
        {
            return;
        }

        foreach ((var key, OpenApiResponse? value) in operation.Responses)
        {
            switch (int.Parse(key))
            {
                case StatusCodes.Status201Created:
                    // NOTE: The header order matters to the back-office client. Do not change.
                    SetHeader(value, Constants.Headers.GeneratedResource, "Identifier of the newly created resource", "string");
                    SetHeader(value, Constants.Headers.Location, "Location of the newly created resource", "string", "uri");
                    break;
            }
        }
    }

    private void SetHeader(OpenApiResponse value, string headerName, string description, string type, string? format = null)
    {

        if (value.Headers is null)
        {
            value.Headers = new Dictionary<string, OpenApiHeader>();
        }

        value.Headers[headerName] = new OpenApiHeader()
        {
            Description = description,
            Schema = new OpenApiSchema { Description = description, Type = type, Format = format }
        };
    }
}

