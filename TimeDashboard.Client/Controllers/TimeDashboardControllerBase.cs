using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Api.Common.Filters;
using Umbraco.Cms.Api.Management.Routing;
using Umbraco.Cms.Web.Common.Authorization;

namespace TimeDashboard.Client.Controllers;

[ApiController]
[VersionedApiBackOfficeRoute("time")]
[Authorize(Policy = "New" + AuthorizationPolicies.BackOfficeAccess)]
[MapToApi("time")]
[JsonOptionsName("time")]
public class TimeDashboardControllerBase
{
}
