# Using `require`

* esm then newrelic
```
$ node -r esm -r newrelic run_require.js

Is pg instrumented? true
```

* NR then esm
```
$ node -r newrelic -r esm run_require.js
Is pg instrumented? false
```

# Using `import`

* esm then newrelic
```
$ node -r esm -r newrelic run_esm.js
Is pg instrumented? false
```

* NR then esm
```
$ node -r newrelic -r esm run_esm.js
Is pg instrumented? false
```
