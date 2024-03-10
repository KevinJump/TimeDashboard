using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Routing;

namespace TimeDashboard.Client.Controllers;

[ApiController]
[BackOfficeRoute("time/api/v{version:apiVersion}/time")]
[Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
[MapToApi("time")]
public class TimeDashboardControllerBase
{
}

