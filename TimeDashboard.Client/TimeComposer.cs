using Microsoft.Extensions.DependencyInjection;

using TimeDashboard.Client.Configuration;

using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace TimeDashboard.Client;

public class TimeComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.ConfigureOptions<ConfigureSwaggerGenOptions>();
    }
}
