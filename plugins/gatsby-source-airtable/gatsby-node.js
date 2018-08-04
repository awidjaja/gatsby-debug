"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("@babel/polyfill");

var Airtable = require('airtable');

var crypto = require("crypto");

exports.sourceNodes =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref, _ref2) {
    var actions, apiKey, baseId, tableName, tableView, queryName, createNode, setPluginStatus, base, table, query, all;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            actions = _ref.actions;
            apiKey = _ref2.apiKey, baseId = _ref2.baseId, tableName = _ref2.tableName, tableView = _ref2.tableView, queryName = _ref2.queryName;
            createNode = actions.createNode, setPluginStatus = actions.setPluginStatus;
            base = new Airtable({
              apiKey: apiKey
            }).base(baseId);
            table = base(tableName);
            _context.next = 7;
            return table.select({
              view: tableView
            });

          case 7:
            query = _context.sent;
            console.time("fetch all Airtable rows");
            _context.next = 11;
            return query.all();

          case 11:
            all = _context.sent;
            console.timeEnd("fetch all Airtable rows");
            setPluginStatus({
              status: {
                lastFetched: new Date().toJSON()
              }
            });
            all.forEach(function (row) {
              var gatsbyNode = Object.assign({
                // Required Gatsby fields
                id: "".concat(row.id),
                parent: "__SOURCE__",
                children: [],
                internal: {
                  type: "Airtable".concat(queryName),
                  contentDigest: crypto.createHash("md5").update(JSON.stringify(row)).digest("hex")
                }
              }, row.fields);
              createNode(gatsbyNode);
            });
            return _context.abrupt("return");

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();