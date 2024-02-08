using System.Globalization;

using Asp.Versioning;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Umbraco.Cms.Api.Common.ViewModels.Pagination;
using Umbraco.Cms.Api.Management.ViewModels.Tree;
using Umbraco.Cms.Core.Services;
using Umbraco.Extensions;

namespace TimeDashboard.Client.Controllers.Tree;


[ApiVersion("1.0")]
public class TimeTreeRootController : TimeTreeControllerBase
{
    public TimeTreeRootController(IEntityService entityService) : base(entityService)
    { }

    [HttpGet("root")]
    [MapToApiVersion("1.0")]
    [ProducesResponseType(typeof(PagedViewModel<EntityTreeItemResponseModel>), StatusCodes.Status200OK)]
    public async Task<ActionResult<PagedViewModel<EntityTreeItemResponseModel>>> Root(int skip =0, int take =100 )
    {
        var items = GetTreeItems();
        return Ok(PagedViewModel(items, items.Count()));
    }

    private static string[] _cultures = [
        "en-US", 
        "fr-fr",
        "en-GB"
    ];

    /// <summary>
    ///  dummy method to get us some tree items. 
    /// </summary>
    /// <returns></returns>
    private IEnumerable<EntityTreeItemResponseModel> GetTreeItems()
    {
        foreach(var culture in _cultures)
        {
            var cultureInfo = CultureInfo.GetCultureInfo(culture);

            yield return new EntityTreeItemResponseModel
            {
                Id = cultureInfo.Name.ToGuid(),
                HasChildren = false,
                Parent = new Umbraco.Cms.Api.Management.ViewModels.ReferenceByIdModel
                {
                    Id = Guid.Empty
                },
                Type = "time-item",
            };
        }
    }
}
