module.exports= function($scope, $state, TestService){
		console.log('enter controller_296')
		$scope.test = TestService.getTest()
	}
