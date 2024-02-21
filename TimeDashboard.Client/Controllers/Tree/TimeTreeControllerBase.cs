using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Api.Common.ViewModels.Pagination;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Routing;

namespace TimeDashboard.Client.Controllers.Tree;

[ApiController]
[BackOfficeRoute($"time/api/v{{version:apiVersion}}/tree")]
[ApiExplorerSettings(GroupName = "Time")]
[Authorize(Policy = "New" + AuthorizationPolicies.BackOfficeAccess)]
[MapToApi("time")]
public class TimeTreeControllerBase : Controller
{
    public TimeTreeControllerBase()
    { }

    protected PagedViewModel<TItem> PagedViewModel<TItem>(IEnumerable<TItem> items, long totalItems )
        => new () { Items = items, Total = totalItems };

}
