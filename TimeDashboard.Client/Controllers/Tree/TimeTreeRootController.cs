﻿using System.Globalization;

using Asp.Versioning;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using TimeDashboard.Client.Controllers.Tree.Models;

using Umbraco.Cms.Api.Common.ViewModels.Pagination;
using Umbraco.Extensions;

namespace TimeDashboard.Client.Controllers.Tree;


[ApiVersion("1.0")]
public class TimeTreeRootController : TimeTreeControllerBase
{
    public TimeTreeRootController() : base()
    { }

    [HttpGet("root")]
    [MapToApiVersion("1.0")]
    [ProducesResponseType(typeof(PagedViewModel<TimeTreeItemResponseModel>), StatusCodes.Status200OK)]
    public async Task<ActionResult<PagedViewModel<TimeTreeItemResponseModel>>> GetRoot(int skip =0, int take =100 )
    {
        var items = GetTreeItems();
        var result = PagedViewModel(items, items.Count());

        return base.Ok(result);
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
    private IEnumerable<TimeTreeItemResponseModel> GetTreeItems()
    {
        foreach(var culture in _cultures)
        {
            var cultureInfo = CultureInfo.GetCultureInfo(culture);

            yield return new TimeTreeItemResponseModel
            {
                Id = cultureInfo.Name.ToGuid(),
                HasChildren = false,
                Name = cultureInfo.Name,
            };
        }
    }
}
